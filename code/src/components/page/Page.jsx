import PageHeader from "./PageHeader";

export default function Page({ title, subtitle, children }) {
  return (
    <>
      <div className="flex flex-col divide-y">
        <PageHeader title={title} subtitle={subtitle} />
        <div className="p-10">{children}</div>
      </div>
    </>
  );
}
