import { DatabaseMemory } from "../database-memory.js";
const database = new DatabaseMemory();

function calcularDias(data){
    //definição entre os dias
    const dataProva = new Date(Date.parse(data));
    const hoje = new Date();
    const DiasTotais = new Date(dataProva - hoje);
    
    //Calculo dos dias
    const Totaldias = Math.ceil(DiasTotais.getTime() / (1000 * 60 * 60 * 24));
    return Totaldias;
}



//inicio do controller
export const criarCronograma = (req, res) => {
    const { data, materias, dayweek, time, sleepstart, sleepend } = req.body;

    //função para o calculo dos dias
    const Totaldias = calcularDias(data);

    database.create({
        data,
        Totaldias,
        materias,
        dayweek,
        time,
        sleepstart,
        sleepend
    });

    return res.status(201).json({message: "Dados recebidos com sucesso!" });
};



export const listarCronograma = (req, res) => {
    const search = req.query.search;
    const cronograma = database.list(search);
    return res.json(cronograma);

};


export const modificarCronograma = (req, res) => {
        const id = req.params.id;
        const { data, materias, dayweek, time, sleepstart, sleepend } = req.body;
        const cronogramaExistente = database.getById(id);
        const Totaldias = calcularDias(data);

        if (!cronogramaExistente) {
            return res.status(404).json({ error: "Cronograma não encontrado" });
        }
      
       
        database.update(id,{
            data,
            Totaldias,
            materias,
            dayweek,
            time,
            sleepstart,
            sleepend
        });

        return res.status(204).json({ message: "Cronograma modificado" });
};


export const deletarCronograma = (req, res) => {
    const { id } = req.params;
    const cronogramaExistente = database.getById(id);

    if (!cronogramaExistente) {
        return res.status(404).json({ error: "Cronograma não encontrado" });
    };

    database.delete(id);
    return res.status(202).json({ message: "Cronograma deletado"});
};

