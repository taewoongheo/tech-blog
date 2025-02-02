import { Post } from '../_types/Post';

/**
 * 최근 게시물 내림차순 비교
 * 음수값 리턴: p1 우선순위
 */
export default function compareDate(p1: Post, p2: Post): number {
  const d1 = new Date(p1.date);
  const d2 = new Date(p2.date);
  return d2.getTime() - d1.getTime();
}
