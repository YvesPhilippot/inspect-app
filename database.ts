import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('tweets.db');

export const initializeDatabase = async () => {
    await db.execAsync(
      `CREATE TABLE IF NOT EXISTS tweets (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userName TEXT,
        userHandle TEXT,
        profileImage TEXT,
        content TEXT,
        timestamp DATE
      );
       CREATE TABLE IF NOT EXISTS replies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        tweetId INTEGER,
        userName TEXT,
        userHandle TEXT,
        content TEXT,
        FOREIGN KEY (tweetId) REFERENCES tweets (id)
      );`
    );   

};

export const addTweet = async (userName: string, userHandle: string, profileImage: string, content: string, timestamp: string) => {
  return await db.runAsync(
      'INSERT INTO tweets (userName, userHandle, profileImage, content, timestamp) VALUES (?, ?, ?, ?, ?);',
      [userName, userHandle, profileImage, content, timestamp]
    );
};

export const getTweets = async ()  => {
    return await db.getAllAsync(  
      'SELECT * FROM tweets;'      
    );
};

export const addReply = async (tweetId: number, userName: string, userHandle: string, content: string) => {
    return await db.runAsync(    
      'INSERT INTO replies (tweetId, userName, userHandle, content) VALUES (?, ?, ?, ?);',
      [tweetId, userName, userHandle, content]
    );

};

export const getReplies = async (tweetId: number) => {
    return await db.getAllAsync(  
   
      'SELECT * FROM replies WHERE tweetId = ?;',
      [tweetId]      
    );
};

export const deleteAll = async () => {
    return await db.runAsync(    
      'DELETE FROM tweets'
    );

};