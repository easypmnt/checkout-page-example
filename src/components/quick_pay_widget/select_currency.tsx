import { Dialog } from '@headlessui/react'
import { BanknotesIcon } from '@heroicons/react/24/outline'

export default function SelectCurrency({
    currencies,
    selectCurrency,
    setModalOpen,
}: {
    currencies: { sumbol: string; mint: string }[]
    selectCurrency: (currency: string) => void
    setModalOpen: (open: boolean) => void
}) {
    return (
        <>
            <div>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                    <BanknotesIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                    <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        Select payment currency
                    </Dialog.Title>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">
                            Select the currency you will use to pay for the order. It will swap to USDC automatically.
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-5 sm:mt-6">
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-3">
                    {currencies.map((currency) => (
                        <button
                            key={currency.mint}
                            onClick={() => selectCurrency(currency.mint)}
                            type="button"
                            className='ring-1 ring-inset ring-gray-300 bg-white text-gray-900 hover:bg-gray-50 flex items-center justify-center rounded-md py-3 px-5 text-sm font-semibold uppercase sm:flex-1'>
                            {currency.sumbol}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-5 sm:mt-6">
                <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="inline-flex w-full justify-center rounded-md bg-gray-50 py-3 px-5 text-sm font-semibold text-gray-600 shadow-sm hover:bg-gray-100"
                >
                    Cancel
                </button>
            </div>
        </>
    )
}