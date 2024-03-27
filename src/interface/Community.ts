export interface Member {
  id: number;
  nickname: string;
  profileImageUrl: string | undefined;
  introduction: string;
}
export interface Hashtag {
  id: number;
  word: string;
}

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export interface Pageable {
  sort: Sort;
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Issue {
  id: number;
  title: string;
  content: string;
  viewCount: number;
  likeCount: number;
  comments: number;
  member: Member;
  createdAt: string;
  updatedAt: string;
  hashtags: Hashtag[];
  scraps: number;
}

export interface Community {
  content?: Issue[];
  pageable: Pageable;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  size: number;
  empty: boolean;
}

export interface CommunityById {
  id: number;
  member: Member;
  content: string;
  likes: number;
  dislikes: number;
  createdAt: string;
  updatedAt: string;
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

export interface CommunityPost {
  title: string;
  content: string;
  hashtags: string[];
}

export interface Issue1 {
  id: number;
  category: string;
  title: string;
  content: string;
  view: number;
  likes: number;
  dislikes: number;
  isRecruiting: boolean;
  skills: string[];
  meeting: string;
}

export interface Content {
  content: string;
}

export interface Project {
  content?: Issue1[];
  pageable: Pageable;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  empty: boolean;
}

export interface ProjectPost {
  title: string;
  content: string;
  skillIds: number[];
  meeting: string;
  roles: string[];
  images: string[];
}

export interface Issue2 {
  studyId: number;
  category: string;
  title: string;
  content: string;
  likes: number;
  dislikes: number;
  views: number;
  location: string | null;
  totalPeople: number | null;
  currentPeople: number | null;
}

export interface Study {
  content?: Issue2[];
  pageable: Pageable;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  last: boolean;
  size: number;
  empty: boolean;
}

export interface StudyPost {
  title: string;
  content: string;
  category: string;
  images: string[];
  location: string;
  totalPeople: number;
  currentPeople: number;
}
