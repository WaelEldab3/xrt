import React from "react";
import { Handbag, Eye } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

export default function ViewItems({ product }) {
  return (
    <Dialog.Root>
      <div className="w-[330px]">
        <div className="relative group">
          <img
            src={product.src}
            alt={product.name}
            className="w-[330px] h-[320px] object-cover rounded-[18px]"
          />

          <Dialog.Trigger asChild>
            <button
              className="
                absolute inset-0
                flex flex-col items-center justify-center
                opacity-0 group-hover:opacity-100
                bg-black/40
                text-white
                transition
                rounded-[18px]
                duration-400
                group-hover:cursor-pointer
              "
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/90 mb-2">
                <Eye className="w-5 h-5 text-green-700" />
              </div>
              <span className="text-sm font-medium bg-black px-3 py-1 rounded-full">
                Quick view
              </span>
            </button>
          </Dialog.Trigger>

          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1 px-4 py-1 rounded-full bg-[#5C9963] text-white shadow-md">
              <span className="text-[17px] font-bold">{product.price}</span>
            </div>
          </div>
        </div>

        <h3 className="mt-8 mb-3 text-[13px] font-[500] text-[#3D4B3E] text-center">
          {product.name}
        </h3>

        <div className="w-[250px] h-[40px] border-2  border-gray-100 rounded-full flex items-center justify-center group hover:bg-[#5C9963] duration-300 cursor-pointer mx-auto">
          <Handbag
            strokeWidth={0.8}
            size={20}
            className="text-[#5C9963] group-hover:text-white duration-300"
          />
          <h5 className="ml-3 text-[#737574] group-hover:text-white duration-300">
            Order Now
          </h5>
        </div>
      </div>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50" />
        <Dialog.Content
          className="
            fixed z-50
            top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-white
            rounded-2xl
            shadow-2xl
            w-[900px] max-w-[95vw]
            max-h-[90vh]
            p-8
            overflow-auto
          "
        >
          <Dialog.Close
            className="
            absolute top-4 right-4
            text-3xl
            leading-none
            cursor-pointer
            bg-transparent
            border-none
            outline-none
            p-1
            hover:text-gray-400
            transition
            duration-300
          "
          >
            &times;
          </Dialog.Close>

          <div className="flex gap-8 ">
            <div className="w-full md:w-1/2">
              <img
                src={product.src}
                alt={product.name}
                className="w-full h-auto rounded-xl"
              />
            </div>

            <div className="w-full md:w-1/2 flex flex-col gap-4">
              <Dialog.Title className="text-2xl font-semibold text-[#2F3E30] ">
                {product.name}
              </Dialog.Title>

              <p className="text-[#5C9963] text-2xl font-bold">
                {product.price}
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                {product.description}
              </p>
              <div className="flex justify-around">
                <div className="flex items-center gap-2">
                  <div className="flex items-center w-[70px] h-[40px] border-2 border-gray-200 rounded-[10px] overflow-hidden">
                    <button
                      onClick={() => {
                        const input = document.getElementById("qty");
                        input.value = Math.max(1, Number(input.value) - 1);
                      }}
                      className="w-10 h-full flex items-center pb-1 justify-center text-xl font-bold text-gray-600 hover:bg-gray-100"
                    >
                      -
                    </button>

                    <input
                      id="qty"
                      type="number"
                      defaultValue={1}
                      className="w-full h-full text-center outline-none border-none [appearance:textfield] caret-transparent "
                    />

                    
                    <button
                      onClick={() => {
                        const input = document.getElementById("qty");
                        input.value = Number(input.value) + 1;
                      }}
                      className="w-10 h-full flex pb-0.5 items-center justify-center text-xl font-bold text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="w-[250px] h-[40px] border-2 border-gray-100 rounded-full flex items-center justify-center group hover:bg-[#5C9963] duration-300 cursor-pointer mx-auto">
                  <Handbag
                    strokeWidth={0.8}
                    size={20}
                    className="text-[#5C9963] group-hover:text-white duration-300"
                  />
                  <h5 className="ml-3 text-[#737574] group-hover:text-white duration-300">
                    Add to Cart
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
