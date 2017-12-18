import { Injectable } from '@angular/core';

import { Image, SearchImage } from '../../models/image';

import { Color } from '../../models/color';

@Injectable()
export class ImageService {
  images: SearchImage[] = [
    {
      "id": "1", "name": "name1", "description": "lorem",
      "matchingColors": [new Color(255, 0, 0)], "dominantColor": new Color(0, 0, 0),
      "uploadDate": new Date(2017, 1, 1), "tags": ["a"], "relevance": 0,
      "prices": { "mug": 10, "shirt": 15, "print": 10 },
      "questions": [{
        "question": "?", "username": "user1", "askDate": new Date(2017, 1, 1), "verified": true,
        "answers": [{ "answer": "yes", "relevance": 0, "username": "user2", "answerDate": new Date(2017, 1, 1), "best": true }]
      }],
      "reviews": [{ "text": "very good", "verified": true, "username": "user1", "reviewDate": new Date(2017, 1, 1) }]
    },
    {
      "id": "2", "name": "name2", "description": "a b",
      "matchingColors": [new Color(0, 255, 0)], "dominantColor": new Color(0, 0, 0),
      "uploadDate": new Date(2017, 1, 3), "tags": ["a"], "relevance": 0,
      "prices": { "mug": 10, "shirt": 15, "print": 10 },
      "questions": [{
        "question": "?", "username": "user1", "askDate": new Date(2017, 1, 1), "verified": true,
        "answers": [{ "answer": "yes", "relevance": 0, "username": "user2", "answerDate": new Date(2017, 1, 1), "best": true }]
      }],
      "reviews": [{ "text": "very good", "verified": true, "username": "user1", "reviewDate": new Date(2017, 1, 1) }]
    },
    {
      "id": "3", "name": "name3", "description": "lorem",
      "matchingColors": [new Color(0, 0, 0)], "dominantColor": new Color(0, 0, 0),
      "uploadDate": new Date(2017, 1, 2), "tags": ["b"], "relevance": 0,
      "prices": { "mug": 10, "shirt": 15, "print": 10 },
      "questions": [{
        "question": "?", "username": "user1", "askDate": new Date(2017, 1, 1), "verified": true,
        "answers": [{ "answer": "yes", "relevance": 0, "username": "user2", "answerDate": new Date(2017, 1, 1), "best": true }]
      }],
      "reviews": [{ "text": "very good", "verified": true, "username": "user1", "reviewDate": new Date(2017, 1, 1) }]
    },
    {
      "id": "4", "name": "name4", "description": "name1",
      "matchingColors": [new Color(0, 0, 0)], "dominantColor": new Color(0, 0, 0),
      "uploadDate": new Date(2017, 1, 4), "tags": ["b"], "relevance": 0,
      "prices": { "mug": 10, "shirt": 15, "print": 10 },
      "questions": [{
        "question": "?", "username": "user1", "askDate": new Date(2017, 1, 1), "verified": true,
        "answers": [{ "answer": "yes", "relevance": 0, "username": "user2", "answerDate": new Date(2017, 1, 1), "best": true }]
      }],
      "reviews": [{ "text": "very good", "verified": true, "username": "user1", "reviewDate": new Date(2017, 1, 1) }]
    },
    {
      "id": "5", "name": "name5", "description": "ipsum",
      "matchingColors": [new Color(0, 0, 0)], "dominantColor": new Color(0, 0, 0),
      "uploadDate": new Date(2017, 1, 1), "tags": ["a", "b"], "relevance": 0,
      "prices": { "mug": 10, "shirt": 15, "print": 10 },
      "questions": [{
        "question": "?", "username": "user1", "askDate": new Date(2017, 1, 1), "verified": true,
        "answers": [{ "answer": "yes", "relevance": 0, "username": "user2", "answerDate": new Date(2017, 1, 1), "best": true }]
      }],
      "reviews": [{ "text": "very good", "verified": true, "username": "user1", "reviewDate": new Date(2017, 1, 1) }]
    },
    {
      "id": "6", "name": "name6", "description": "rrr",
      "matchingColors": [new Color(0, 0, 0)], "dominantColor": new Color(0, 0, 0),
      "uploadDate": new Date(2017, 1, 2), "tags": ["a", "b"], "relevance": 0,
      "prices": { "mug": 10, "shirt": 15, "print": 10 },
      "questions": [{
        "question": "?", "username": "user1", "askDate": new Date(2017, 1, 1), "verified": true,
        "answers": [{ "answer": "yes", "relevance": 0, "username": "user2", "answerDate": new Date(2017, 1, 1), "best": true }]
      }],
      "reviews": [{ "text": "very good", "verified": true, "username": "user1", "reviewDate": new Date(2017, 1, 1) }]
    },
  ];
  getImages(): SearchImage[] {
    return this.images;
  }
  getImageById(id): SearchImage {
    return this.images.find(item => item.id === id);
  }
  constructor() { }

}
