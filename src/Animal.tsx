import "./Animal.css"

interface AnimalProps {
    icone: string;
    nome: string;
    peso: number;
    extinto: boolean;
}

export default function Animal({icone, nome, peso, extinto}:AnimalProps) {
    return <div className="animal">
        <div className="icone">{icone}</div>
        <div className="nome">{nome}</div>
        <div className="peso">{peso.toLocaleString()}kg</div>
        <div className="extinto">{extinto}</div>
    </div>;
}