import Swapinput from '@/app/ui/swap/swap-input';
import Swapoutput from '@/app/ui/swap/swap-output';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';

export default async function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Swap</h1>
      </div>
      <div className="mt-4 flex-col items-center justify-between gap-2 md:mt-8">
        <div>
          <Swapinput placeholder="Amount in..." />
        </div>
        {/* <CreateInvoice /> */}
        <div>
          <Swapoutput placeholder="Amount out..." />
        </div>
      </div>
      {/*  <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense> */}
      <div className="mt-5 flex w-full justify-center">
        {/* <Pagination totalPages={totalPages} /> */}
      </div>
    </div>
  );
}
