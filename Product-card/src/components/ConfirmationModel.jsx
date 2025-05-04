const ConfirmationModal = ({ totalItems, onClose, onConfirm }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Confirm Order</h2>
          <p className="mb-6">You're about to confirm {totalItems} items. Continue?</p>
          <div className="flex justify-end gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-red text-white rounded hover:bg-red"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  };

export default ConfirmationModal;