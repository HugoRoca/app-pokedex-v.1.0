import path from 'path'
import * as swagger from 'swagger2'
import { ui } from 'swagger2-koa'

const file = path.join(__dirname, 'docs.yaml')
const document: any = swagger.loadDocumentSync(file)

export default ui(document, '/api/docs')
