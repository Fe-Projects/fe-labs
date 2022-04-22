import { promises as fs } from 'fs'
import Keyboard from '../types/keyboard'

export default async function GetAllPost() {
  try {
    const data = await fs.readFile('keyboards.json', 'utf8')
    const kbl: Keyboard[] = []
    const keyboards = JSON.parse(data)
    keyboards.keebs.forEach(function (v: Keyboard) {
      kbl.push(v)
    })
    return kbl
  } catch (err) {
    console.log(`F error: ${err}`)
    return null
  }
}
