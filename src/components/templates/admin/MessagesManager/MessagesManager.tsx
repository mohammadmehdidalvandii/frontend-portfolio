import { useState } from "react";
import { useDeleteMessage, useGetAllMessage, useUpdateMessage, } from "@services/contact.services";
import { MessageDTO } from "../../../../types/message";
import { showConfirm } from "@utils/confirm";
import { showError, showSuccess } from "@utils/Toasts";
import { getApiErrorMessage } from "@utils/getApiError";

const MessagesManager: React.FC = () => {
    const { data: Messages, isLoading, isError } = useGetAllMessage();
    const updateMessage = useUpdateMessage();
    const deleteMessage = useDeleteMessage();
    const [selected, setSelected] = useState<MessageDTO | null>(null);

    if (isLoading) return <p className="font-mono text-center text-primary">// loading...</p>;
    if (isError) return <p className="font-mono text-center text-primary">// error fetching messages</p>;

    const handlerUpdateMessage = (messageId: string) => {
        updateMessage.mutate({ id: messageId, values: { isRead: true } });
    }

    const handleDeleteMessage = async (messageId: string) => {
        const result = await showConfirm('Are you sure you want to delete the project?');
        if (result.isConfirmed) {
            deleteMessage.mutate(messageId, {
                onSuccess: () => {
                    showSuccess('Project deleted successfully')
                },
                onError: (error) => {
                    showError(getApiErrorMessage(error))
                }
            })
        }
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                    Inbox / User message
                </h2>
                <span className="font-mono text-[11px] text-accent">
                    {Messages?.filter((m: MessageDTO) => !m.isRead).length} unread
                </span>
            </div>
            {!Messages || Messages.length === 0 ? (
                <div className="border border-dashed border-input py-16 text-center font-mono text-lg text-foreground">
                    {`Inbox is empty. messages from the contact form will appear here`}
                </div>
            ) : (
                <div className="divide-y divide-input border-y border-input">
                    {Messages.map((message: MessageDTO) => (
                        <div key={message._id}
                            className={`grid grid-cols-12 gap-4 py-4 px-2 items-center transition-colors ${!message.isRead ? 'bg-primary/5 ' : ''}`}>

                            <div className="col-span-1 flex justify-center">
                                {!message.isRead ? (
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                ) : (
                                    <span className="w-2 h-2 rounded-full bg-input" />
                                )}
                            </div>
                            <span className={`col-span-2 text-xs truncate ${!message.isRead ? 'font-bold text-foreground' : 'text-accent line-through'}`}>
                                {message.name}
                            </span>
                            <span className="col-span-3 font-mono text-[11px] text-accent truncate">
                                {message.email}
                            </span>
                            <span className={`col-span-3 text-sm truncate ${!message.isRead ? 'font-medium text-foreground' : 'text-accent line-through'}`}>
                                {message.subject}
                            </span>
                            <div className="col-span-2 flex justify-end gap-3">
                                <button
                                    onClick={() => setSelected(message)}
                                    className="font-mono text-[11px] uppercase tracking-widest text-accent hover:text-primary cursor-pointer transition-colors">
                                    show message
                                </button>
                                <button
                                    onClick={() => handlerUpdateMessage(message._id!)}
                                    className="font-mono text-[11px] uppercase tracking-widest text-accent hover:text-primary cursor-pointer transition-colors">
                                    read
                                </button>
                                <button
                                    onClick={() => handleDeleteMessage(message._id!)}
                                    className="font-mono text-[11px] uppercase tracking-widest text-accent hover:text-destructive cursor-pointer transition-colors">
                                    delete
                                </button>
                            </div>

                        </div>
                    ))}
                </div>
            )}

            {/* message modal */}
            {selected && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
                    onClick={() => setSelected(null)}>
                    <div className="bg-black border border-input p-8 max-w-lg w-full font-mono mx-4"
                        onClick={(e) => e.stopPropagation()}>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-1">
                            // message from {selected.name}
                        </p>
                        <p className="text-[12px] text-accent mb-6">{selected.email}</p>
                        <h3 className="text-lg font-bold mb-4 tracking-tight">{selected.subject}</h3>
                        <textarea rows={10} className="text-sm w-full bg-secondary/75 text-accent leading-relaxed whitespace-pre-line">
                            {selected.message}
                        </textarea>
                        <div className="flex justify-between items-center mt-8">
                            <button onClick={() => setSelected(null)}
                                className="font-mono text-[12px] cursor-pointer uppercase tracking-widest text-accent hover:text-primary transition-colors">
                                // close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MessagesManager;