import GuestTable from "@/components/GuestTable";

async function getGuests() {
  const res = await fetch('http://localhost:3000/api/guests', {
    cache: 'no-store',
  });

  return res.json();
}


export default async function GuestList() {
  const guests = await getGuests();

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex justify-center">
      <div className="w-full max-w-5xl bg-white shadow-lg rounded-xl overflow-hidden">

        <div className="px-6 py-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">Հյուրերի ցանկ</h2>
        </div>

        <GuestTable guests={guests} />
      </div>
    </div>
  );
}
