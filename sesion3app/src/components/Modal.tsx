import { JSX } from "react";
import { Description, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}
function ModalFinal(props: ModalProps): JSX.Element {
    return (
        <Dialog
        open={props.isOpen}
        onClose={props.onClose}
        className="bg-gray-900 bg-opacity-50 fixed inset-0 z-10 flex
       items-center justify-center"
        >
        <DialogPanel className="bg-white p-6 rounded-lg shadow-xl maxw-md w-full">
        <DialogTitle className="text-lg font-semibold textgray-900">Pregunta importante para acabar</DialogTitle>
        <Description className="mt-2 text-gray-600">
        ¿Realmente deseas finalizar las tareas de DIRI?
        </Description>
        <p className="mt-4 text-sm text-gray-700">
        Esta es la última materia de DIRI, después de esto debes hacer el
       pequeño proyecto para la asignatura.
        Verás que sólo puedes contestar que sí.
        </p>
        <div className="mt-6 flex justify-end">
        <button
        onClick={props.onClose}
        className="px-4 py-2 bg-blue-600 text-red rounded-md
       shadow hover:bg-blue-700"
        >
        Sí, claro
        </button>
        </div>
        </DialogPanel>
        </Dialog>
    );
}
export default ModalFinal;