import React, {
  MouseEventHandler,
  ReactNode,
  useCallback,
  useState,
} from "react";

type FormCardProps = {
  title: string;
  text: string;
  children: ReactNode;
};

const SettingsFormCard: React.FC<FormCardProps> = ({
  title,
  text,
  children,
}) => {
  const [showForm, setShowForm] = useState<boolean>(false);

  const ShowFormHandler: MouseEventHandler = useCallback((event) => {
    event.preventDefault();
    setShowForm((showForm) => !showForm);
  }, []);

  return (
    <div className="accordion-item">
      <div className="accordion-header">
        <div
          role="button"
          onClick={ShowFormHandler}
          className={`accordion-button text-reset ${
            showForm ? undefined : "collapsed"
          }`}
          data-bs-toggle="collapse"
          data-bs-target="#accordion-profile-body-1"
          aria-expanded="false"
          aria-controls="accordion-profile-body-1"
        >
          <div>
            <h5>{title}</h5>
            <p>{text}</p>
          </div>
        </div>
      </div>

      <div
        role="button"
        className={`accordion-collapse collapse ${
          showForm ? "show" : undefined
        }`}
        aria-labelledby="accordion-profile-1"
        data-parent="#accordion-profile"
      >
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
};

export default SettingsFormCard;
