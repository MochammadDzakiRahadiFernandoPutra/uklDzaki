// /data/writers.ts

export interface Writer {
  id: string;
  name: string;
  avatarUrl: string;
  bio: string;
  followers: number;
}

const writers: Writer[] = [
  {
    id: "w1",
    name: "Jane Austen",
    avatarUrl: "https://i.pinimg.com/736x/d8/2e/c6/d82ec6476e834723e5d9896ad3b20c15.jpg",
    bio: "English novelist known for her keen observations...",
    followers: 10500,
  },
  {
    id: "w2",
    name: "Mark Twain",
    avatarUrl: "https://i.pinimg.com/736x/08/89/2f/08892f4d735b217c578964617b3240e0.jpg",
    bio: "American writer and humorist best known for...",
    followers: 8200,
  },
  {
    id: "w3",
    name: "J.K. Rowling",
    avatarUrl: "https://i.pinimg.com/736x/99/8c/fd/998cfdbbd5ab1f9d054a2233bac90730.jpg",
    bio: "Author of the Harry Potter series...",
    followers: 12700,
  },
  {
    id: "w4",
    name: "George Orwell",
    avatarUrl: "https://i.pinimg.com/736x/3a/50/86/3a5086b805b8aef5ab2073612cb506f9.jpg",
    bio: "English novelist and critic famous for 1984...",
    followers: 9800,
  },
  {
    id: "w5",
    name: "Chimamanda Ngozi Adichie",
    avatarUrl: "https://i.pinimg.com/736x/6d/86/23/6d8623dc030344bb34d79af76bbf609b.jpg",
    bio: "Nigerian writer whose novels explore...",
    followers: 7400,
  },
];

export default writers;
