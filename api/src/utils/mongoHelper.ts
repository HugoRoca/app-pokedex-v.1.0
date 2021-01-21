/* eslint no-use-before-define: 0 */
import * as mongo from 'mongodb'

export class MongoHelper {
  public static client: mongo.MongoClient

  constructor() {}

  public static async connect(url: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      mongo.MongoClient.connect(
        url,
        { useNewUrlParser: true, useUnifiedTopology: true },
        (err, client: mongo.MongoClient) => {
          if (err) {
            reject(err)
          } else {
            MongoHelper.client = client
            resolve(client)
          }
        }
      )
      console.log('connected mongodb successfully!')
    })
  }

  public disconnect(): void {
    MongoHelper.client.close()
  }
}
