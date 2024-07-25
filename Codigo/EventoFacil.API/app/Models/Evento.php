<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    protected $table = 'eventos';
    protected $fillable = ['titulo', 'descricao', 'data_inicio', 'data_termino', 'data_deletado', 'cor'];
    protected $dates = ['data_inicio', 'data_termino', 'data_criacao', 'data_edicao'];
    public $timestamps = false;
}