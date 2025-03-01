export default async function EnqueryDetails({ params }) {
  const slug = (await params).enqueryId;
  return <h1 className="text-red-500">{slug}</h1>;
}
