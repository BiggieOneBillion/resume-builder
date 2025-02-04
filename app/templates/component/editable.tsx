"use client";
import { Edit, Edit2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@radix-ui/react-dialog";

type EditableProps = {
  initialValue: string;
  className?: string;
};

const Editable: React.FC<EditableProps> = ({ initialValue, className }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (initialValue) {
      setValue(initialValue);
    }
  }, []);

  return (
    <section className="relative flex items-center gap-1 dialog-container ">
      <p className={`${className || ""} hidden lg:block`}>{value}</p>
      <section className=" visible lg:invisible">
        <Dialog>
          <DialogTrigger>
            <span className="hidden lg:block">
              <Edit size={12} />
            </span>
            <span className={`${className} text-left inline-block border lg:hidden`}>
              {value}
            </span>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogDescription>
                <div className="my-5 space-y-5">
                  <Textarea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    rows={6}
                  />
                  <DialogClose asChild>
                    <Button>Update</Button>
                  </DialogClose>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </section>
    </section>
  );
};
export default Editable;
