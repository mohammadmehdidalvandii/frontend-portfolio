type Props = {
  type?: "loading" | "error" | "empty";
  message?: string;
};

const StateFeedback: React.FC<Props> = ({
  type = "loading",
  message,
}) => {
  if (type === "loading") {
    return (
      <div className="flex min-h-[20vh] items-center justify-center">
        <span className="font-monoBold text-primary animate-pulse text-2xl">
          {'< Loading />'}
        </span>
      </div>
    );
  }

  if (type === "error") {
    return (
      <div className="flex min-h-[20vh] flex-col items-center justify-center text-center">
        <span className="font-mono text-destructive mb-2 text-4xl">
          {'< Error />'}
        </span>
        <p className="font-mono text-accent text-xl">
          {message || "Something went wrong"}
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-[20vh] items-center justify-center">
      <span className="font-mono  text-accent text-xl">
        // {message || "No data found"}
      </span>
    </div>
  );
};

export default StateFeedback;