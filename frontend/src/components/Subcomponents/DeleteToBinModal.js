import { useHistory } from "react-router";

const Modal = ({ deleteToBin, setDeleteToBin, id }) => {
  const history = useHistory();
  const handleDelete = () => {
    fetch("https://companyfiles.zuri.chat/api/v1/files/deleteToBin/" + id, {
      method: "Put",
    }).then((res) => (res.status === 200 ? history.push("/trash") : null));
  };

  console.log(id);
  return deleteToBin ? (
    <>
      <div className="tw-justify-center tw-items-center tw-flex tw-overflow-x-hidden tw-overflow-y-auto tw-fixed tw-inset-0 tw-z-50 tw-outline-none focus:tw-outline-none">
        <div className="tw-relative tw-w-auto tw-my-6 tw-mx-auto tw-max-w-3xl">
          {/*content*/}
          <div className="tw-tw-border-0 tw-rounded-lg tw-shadow-lg tw-relative tw-w-full tw-flex tw-flex-col tw-bg-white tw-outline-none focus:tw-outline-none tw-px-9 sm:tw-pl-5 sm:tw-pr-11">
            {/*header*/}
            <div className="sm:tw-p-5 tw-pt-7 tw-text-center sm:tw-text-left">
              <h3 className="tw-text-2xl tw-text-text-grey tw-font-semibold">
                Delete File
              </h3>
            </div>
            {/*body*/}
            <div className="tw-relative sm:tw-pr-20 ">
              <p className="tw-mt-3 tw-mb-4 sm:tw-pl-5 tw-text-text-grey tw-text-sm tw-text-center sm:tw-text-left">
                Are you sure you want to Delete File?
              </p>
            </div>
            {/*footer*/}
            <div className="tw-flex tw-items-center tw-justify-center sm:tw-justify-end tw-py-6 tw-rounded-b">
              <button
                className="tw-border tw-border-primary tw-text-primary tw-rounded tw-background-white tw-font-semibold tw-px-6 tw-py-3 tw-text-sm tw-outline-none focus:tw-outline-none tw-mr-5 tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
                type="button"
                onClick={() => setDeleteToBin(false)}
              >
                Cancel
              </button>
              <button
                className="tw-bg-primary tw-text-white active:tw-bg-emerald-600 tw-font-semibold tw-text-sm tw-px-6 tw-py-3 tw-rounded tw-shadow hover:tw-shadow-xlg tw-outline-none focus:tw-outline-none tw-mb-1 tw-ease-linear tw-transition-all tw-duration-150"
                type="button"
                onClick={() => {
                  handleDelete();
                  setDeleteToBin(false);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="tw-opacity-30 tw-fixed tw-inset-0 tw-z-40 tw-bg-black"></div>
    </>
  ) : null;
};

// {
//   // const handleDelete = (id) => {
//   //   fetch("https://companyfiles.zuri.chat/api/v1/files/deleteToBin/" + id, {
//   //     method: "DELETE",
//   //   }).then((res) => {
//   //     // res.status === 200 ? setFileDel("") : null;
//   //     console.log(res);
//   //   });
//   //   // setData((prev) => prev.filter((data) => data.id !== id));
//   // };
//   deleteToBin ? (

//   ) : null;
//   }

export default Modal;
