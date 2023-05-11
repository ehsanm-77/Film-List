import { Dialog } from '@headlessui/react';

export const ModalDesc = ({ setIsOpen, isOpen, desc }: any) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className={'relative'}
    >
      <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
        <Dialog.Panel
          className={
            'rounded-md bg-[#d9d9d9] h-1/2 md:m-40 m-16 w-full shadow-md'
          }
        >
          <div className="flex justify-between py-5 px-10">
            <Dialog.Title className="mt-2">توضیحات</Dialog.Title>
            <button
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2"
            >
              <div>بستن</div>
              <div className="mt-2">✖</div>
            </button>
          </div>
          <div className="h-full flex justify-center">
            <Dialog.Description
              className={'border border-slate-500 w-5/6 h-3/6 p-2 rounded-md'}
            >
              {desc}
            </Dialog.Description>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
