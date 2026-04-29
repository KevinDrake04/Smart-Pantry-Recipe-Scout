import { parentPort } from 'node:worker_threads'
import {
  processRecipeNlgRow,
  type RawRecipeNlgRow,
  resetWorkerCacheStats,
  getWorkerCacheStats,
} from './curateRecipeDataset.ts'

type BatchRow = { rowIndex: number; row: RawRecipeNlgRow }
type Candidate = Exclude<ReturnType<typeof processRecipeNlgRow>, null>

type BatchRequest = {
  type: 'batch'
  batchId: number
  rows: BatchRow[]
}

type BatchResult = {
  type: 'batchResult'
  batchId: number
  candidates: Candidate[]
  stats: { accepted: number; rejected: number }
  cacheStats: ReturnType<typeof getWorkerCacheStats>
}

if (!parentPort) {
  throw new Error('curateRecipeDataset.worker.ts: missing parentPort')
}

parentPort.on('message', (msg: BatchRequest) => {
  if (msg.type !== 'batch') return

  resetWorkerCacheStats()

  const candidates: Candidate[] = []
  let accepted = 0
  let rejected = 0

  for (const item of msg.rows) {
    try {
      const c = processRecipeNlgRow(item.rowIndex, item.row)
      if (c) {
        accepted++
        candidates.push(c)
      } else {
        rejected++
      }
    } catch {
      rejected++
    }
  }

  const out: BatchResult = {
    type: 'batchResult',
    batchId: msg.batchId,
    candidates,
    stats: { accepted, rejected },
    cacheStats: getWorkerCacheStats(),
  }

  parentPort.postMessage(out)
})

