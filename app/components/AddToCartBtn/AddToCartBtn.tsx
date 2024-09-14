"use client";

function AddToCartBtn() {
  return (
    <div>
      <button
        // className="bg-sky-100 px-5 py-2 rounded-[7px] text-xl hover:bg-slate-300 transition-all duration-200"
        className="btn btn-primary"
        onClick={() => console.log("object")}
      >
        Click
      </button>
    </div>
  );
}

export default AddToCartBtn;
