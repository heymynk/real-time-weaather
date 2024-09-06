import {
    CheckCircleIcon,
    ExclamationTriangleIcon,
  } from "@heroicons/react/24/solid";
  
  type Props = {
    message: string;
    warning?: boolean;
  };
  
  function CalloutCard({ message, warning }: Props) {
    return (
      <div
        className={`mt-4 mb-5 p-4 rounded-lg shadow-md transition-all duration-300 ${
          warning
            ? "bg-rose-100 text-rose-900 border-l-4 border-rose-900"
            : "bg-teal-100 text-teal-900 border-l-4 border-teal-900"
        }`}
      >
        <div className="flex items-center">
          <div className="mr-3">
            {warning ? (
              <ExclamationTriangleIcon className="w-6 h-6 text-rose-900" />
            ) : (
              <CheckCircleIcon className="w-6 h-6 text-teal-900" />
            )}
          </div>
          <div>
            <h2 className="text-lg font-semibold">{message}</h2>
          </div>
        </div>
      </div>
    );
  }
  
  export default CalloutCard;
  