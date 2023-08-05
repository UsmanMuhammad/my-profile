import { Progress } from "./components/Progress/progress";

export default function Home() {
  const name = "Muhammad Usman";
  const title = "Fullstack Software Developer";
  const underline = "Website in Development...";
  return (
    <main className="flex min-h-screen flex-col p-24">
        <h5 className="text-8xl font-sans text-center">{name}</h5>
        <h1 className="text-4xl font-sans text-center">{title}</h1>
        <h1 className="text-2xl font-sans text-center p-12">{underline}</h1>
        <Progress />
    </main>
  );
}
