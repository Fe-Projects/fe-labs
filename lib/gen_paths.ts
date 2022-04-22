import { promises as fs } from 'fs'
import Keyboard from '../types/keyboard'

export default async function AllPaths() {
  try {
    const data = await fs.readFile('keyboards.json', 'utf8')
    const kbl: string[] = []
    const keyboards = JSON.parse(data)
    keyboards.keebs.forEach(function (v: Keyboard) {
      console.log(kbl.push(v.name))
    })
    return kbl
  } catch (err) {
    console.log(`F error: ${err}`)
    return []
  }
}
