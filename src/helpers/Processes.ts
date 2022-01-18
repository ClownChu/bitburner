import { NS } from "@ns"

export class ProcessesHelper {
    static GetProcessThreadCount(ns: NS, scriptPath: string, hostname?: string, args?: string[]): number {
        const processes = ns.ps(hostname)
        for (let i = 0; i < processes.length; ++i) {
            if (processes[i].filename === scriptPath) {
                if (args === undefined || processes[i].args === args) {
                    return processes[i].threads
                }
            }
        }

        return 0
    }
}