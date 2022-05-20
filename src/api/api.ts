import axios from 'axios';
import { Card } from '../models/card';

export async function fetchCards() {
  const { data } = await axios({
    method: 'get',
    url: 'https://picsum.photos/v2/list',
  });
  return data.map((card: Card) => {
    card.liked = card.author.includes('am');
    return card;
  });
}

export function likeCard(id: number) {
  return Promise.resolve();
}

export function unlikeCard(id: number) {
  return Promise.resolve();
}

export function removeCard(id: number) {
  return Promise.resolve();
}
