export interface Member {
  id: number;
  nickname: string;
  profileImageUrl: string | null;
  introduction: string;
}

export interface CommunityComments {
  id: number;
  member: Member;
  content: string;
  likes: number;
  dislikes: number;
  createdAt: string;
  updatedAt: string;
}