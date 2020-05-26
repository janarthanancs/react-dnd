import { TouchBackend } from '../index'
import { DragDropManager } from 'dnd-core'
import { TouchBackendImpl } from '../TouchBackendImpl'

describe('TouchBackend', () => {
	it('can be constructed', () => {
		const backend = TouchBackend(mockManager(), {}, {})
		expect(backend).toBeDefined()
	})

	it('can be constructed', () => {
		const backend = TouchBackend(mockManager(), {}, {})
		expect(backend).toBeDefined()
		const profile = backend.profile()
		expect(profile).toBeDefined()
		Object.keys(profile).forEach((profilingKey) =>
			expect(profile[profilingKey]).toEqual(0),
		)
	})

	it('can determine target ids', () => {
		const mockNode = {} as HTMLElement
		const backend = TouchBackend(mockManager(), {}, {}) as TouchBackendImpl
		backend.targetNodes.set('abc', mockNode)

		expect(backend._getDropTargetId(mockNode)).toEqual('abc')
		expect(backend._getDropTargetId({} as Element)).toEqual(undefined)
	})
})

function mockManager(): DragDropManager {
	return {
		getActions: () => null,
		getMonitor: () => null,
		getRegistry: () => null,
	} as any
}