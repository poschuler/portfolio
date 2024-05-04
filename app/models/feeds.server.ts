import pg from "pg";
import { dbQuery } from "~/db.server";

export type FeedRowType = {
  idFeed: number;
  content: string;
  stringDate: string;
};

export async function findAllFeeds() {
  let queryResult = await dbQuery<FeedRowType>(
    `select
      id_feed as ${pg.escapeIdentifier("idFeed")},
      content as ${pg.escapeIdentifier("content")},
      TO_CHAR(date, 'YYYY-MM-DD') as ${pg.escapeIdentifier("stringDate")}
      from feeds
      order by date desc
    `,
    null
  );

  return queryResult;
}
