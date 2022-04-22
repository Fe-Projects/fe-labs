import { promises as fs } from 'fs'
import Keyboard from '../types/keyboard'

export default async function GetPost(name: string) {
  console.log(`getting ${name}`)
  try {
    const data = await fs.readFile('keyboards.json', 'utf8')
    const keyboards = JSON.parse(data)
    let kb = null
    keyboards.keebs.forEach((k: Keyboard) => {
      if (k.name.toLowerCase() === name.toLowerCase()) {
        kb = k
      }
    })
    console.log(kb)
    return kb
  } catch (err) {
    console.log(err)
    return null
  }
}
