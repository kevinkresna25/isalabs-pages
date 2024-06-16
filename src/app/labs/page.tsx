import { Labs } from "./labs";

export default function Page() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="grid lg:w-8/12 md:w-10/12 self-center text-center gap-8 mx-4">
          <div>
            <Labs></Labs>
          </div>
        </div>
      </div>
    </>
  );
}
