import { useState } from "react";
import "./styles/Donation.scss";

interface DonationProps {
    availableAmounts: Array<number | null>;
}

export default function Donation(props: DonationProps) {
    const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

    const handleClick = (index: number) =>
        setSelectedAmount((prev) => (prev === index ? null : index));

    return (
        <section className="Donation">
            <h1 className="Donation__title">Támogasd az IYF-et!</h1>
            <div className="Donation__amount-group">
                {props.availableAmounts.map((amount, index) => (
                    <div
                        className={`Donation__amount${
                            selectedAmount === index ? " selected" : ""
                        }`}
                        key={`Donation__amount-${index}`}
                        onClick={() => handleClick(index)}
                    >
                        {amount === null ? "Egyéni összeg" : `${amount} Ft`}
                    </div>
                ))}
            </div>
            <button
                className="Donation__donate-btn"
                disabled={selectedAmount === null}
            >
                Támogatás
            </button>
        </section>
    );
}
