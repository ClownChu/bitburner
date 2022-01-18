import { NS } from '@ns'
import { Deprecated } from '/monica/profiles/hacker/deprecated.js'
import { IProfile } from '/monica/definitions/IProfile.js'
import { Hacker } from '/monica/profiles/hacker/hacker.js'

// run /monica/Monica.js deprecated 10 15 200 64 16 20

export async function main(ns : NS) : Promise<void> {
    const monica = new Monica(ns)
    monica.LoadProfile(
        ns.args.at(0) as string
    ).then((profile) => {
        profile.Execute().then((result) => {
            ns.tprint(`Profile execution result: ${result}`)
        }, (err) => {
            ns.tprint(err)
        })
    })
}

class Monica {
    protected _ns: NS

    constructor(ns : NS) {
        this._ns = ns
        
        this._ns.tprint(" ")
        this._ns.tprint("                                     ▄▄                 ")
        this._ns.tprint("▀████▄     ▄███▀                     ██                 ")
        this._ns.tprint("  ████    ████                                          ")
        this._ns.tprint("  █ ██   ▄█ ██   ▄██▀██▄▀████████▄ ▀███  ▄██▀██ ▄█▀██▄  ")
        this._ns.tprint("  █  ██  █▀ ██  ██▀   ▀██ ██    ██   ██ ██▀  ████   ██  ")
        this._ns.tprint("  █  ██▄█▀  ██  ██     ██ ██    ██   ██ ██      ▄█████  ")
        this._ns.tprint("  █  ▀██▀   ██  ██▄   ▄██ ██    ██   ██ ██▄    ▄█   ██  ")
        this._ns.tprint("▄███▄ ▀▀  ▄████▄ ▀█████▀▄████  ████▄████▄█████▀▀████▀██▄")
        this._ns.tprint("                          🤖                           ")
        this._ns.tprint(" ")
    }

    /**
     * TODO : Monica should choose the profile and use multiple
     */
    LoadProfile(profileType: string): Promise<IProfile> {
        let profile: IProfile = new Deprecated(this._ns)
        switch (profileType) {
            case "hacker":
                profile = new Hacker()
                break
            case "criminal":
                break
            case "broker":
                break
        }

        return new Promise((resolve, reject) => {
            if (profile === undefined) {
                reject(
                    new Error(`Profile could not be identified by '${profileType}'`)
                )
            }
            resolve(profile)
        })
    }
}