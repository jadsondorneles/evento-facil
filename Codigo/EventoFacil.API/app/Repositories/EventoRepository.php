<?php

namespace App\Repositories;

use App\Models\Evento;
use Carbon\Carbon;

class EventoRepository
{
    public function getAll()
    {
        $eventos = Evento::whereNull('data_deletado')->orderBy('data_inicio')->get();
        $eventos->map(function($evento){
            unset($evento->data_deletado);
            return $evento;
        });

        return $eventos;
    }

    public function find($id)
    {
        $evento = Evento::where('id', $id)->whereNull('data_deletado')->first();

        if(!$evento){
            throw new \Exception('Evento não encontrado');
        }

        $evento->makeHidden('data_deletado');
        return $evento;
    }

    public function create(array $data)
    {
        return Evento::create($data);
    }

    public function update($id, array $data)
    {
        $evento = Evento::find($id);
        
        if (!$evento) {
            throw new \InvalidArgumentException('Evento não encontrado');
        }
        
        $evento->update($data);
        return $evento;
    }

    public function delete($id)
    {
        $evento = Evento::find($id);
        
        if (!$evento) {
            throw new \InvalidArgumentException('Evento não encontrado');
        }
     
        $evento->update(['data_deletado' => Carbon::now('America/Sao_Paulo')->toDateTimeString()]);
        return $evento;
    }
}