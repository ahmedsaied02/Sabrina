import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="/Menu.pdf"
        width="100%"
        height="100%"
        style={{ border: 'none' }}
      />
    </div>
  );
}
