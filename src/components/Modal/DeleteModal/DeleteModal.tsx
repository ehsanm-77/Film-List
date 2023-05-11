import { useState } from 'react';
import { Dialog } from '@headlessui/react';

export const ModalDelete = ({
  setIsModalOpen,
  isModalOpen,
  desc,
  handleDelete,
}: any) => {
  return (
    <Dialog
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      className={'relative'}
    >
      <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
        <Dialog.Panel
          className={
            'rounded-md bg-slate-700 text-white md:h-1/3 md:w-1/5 h-1/3 md:m-40 m-16 w-1/2 shadow-md'
          }
        >
          <div className="h-full flex flex-col items-center justify-evenly py-5">
            <Dialog.Title className="mt-2 text-center w-full">
              آیا از حذف اطمینان دارید؟
            </Dialog.Title>
            <button
              onClick={() => setIsModalOpen(false)}
              className="flex items-center gap-2"
            >
              <div
                className="px-5 py-1 rounded-full text-white bg-red-400"
                onClick={handleDelete}
              >
                بله
              </div>
              <div className="px-5 py-1 rounded-full text-white bg-slate-500">
                خیر
              </div>
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};
