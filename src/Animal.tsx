import "./Animal.css"

interface AnimalProps {
    icone: string;
    nome: string;
    peso: number;
    extinto: boolean;
}

export default function Animal({icone, nome, peso, extinto}:AnimalProps) {
    return <div className="animal">
        <div>{icone}</div>
        <div>{nome}</div>
        <div>{peso.toLocaleString()}kg</div>
        <div>{extinto}</div>
    </div>;
}