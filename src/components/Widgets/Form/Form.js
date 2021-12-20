import { useState, Fragment, forwardRef } from "react";
import { Controller } from "react-hook-form";
import { Fieldset } from "./form.style";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const SelectField = forwardRef(
  (
    { name, item, action, value, error, selected_item, control, defaultValue },
    ref
  ) => {
    const [selected, setSelected] = useState(defaultValue || "Select One");

    return (
      <Fieldset className={`border w-full ${error && "border-red-500"}`}>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange }, ...props }) => (
            <Listbox
              value={selected}
              onChange={e => {
                onChange(e);
                setSelected(e);
              }}
            >
              {({ open }) => (
                <>
                  <div className="mt-1 relative w-full">
                    <Listbox.Button className="relative w-full pr-10 pl-3 py-2 text-left cursor-default sm:text-sm">
                      <span className="flex items-center">
                        <span className="block truncate">{selected}</span>
                      </span>
                      <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-0 pointer-events-none">
                        <SelectorIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </span>
                    </Listbox.Button>
                    <Transition
                      show={open}
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-28 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                        {item?.map((content, index) => (
                          <Listbox.Option
                            key={index}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "text-white bg-gray-400"
                                  : "text-gray-900",
                                "cursor-default select-none relative py-2 pl-3 pr-9 outline-none"
                              )
                            }
                            value={content}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className="flex items-center">
                                  <span
                                    className={classNames(
                                      selected ? "font-semibold" : "font-normal"
                                      // "block truncate"
                                    )}
                                  >
                                    {content}
                                  </span>
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? "text-white" : "text-rose-500",
                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                    )}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </>
              )}
            </Listbox>
          )}
        />
      </Fieldset>
    );
  }
);
