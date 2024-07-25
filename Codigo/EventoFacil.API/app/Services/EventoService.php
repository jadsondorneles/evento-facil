<?php

namespace App\Services;

use App\Repositories\EventoRepository;

class EventoService
{
    protected $eventoRepository;

    public function __construct(EventoRepository $eventoRepository)
    {
        $this->eventoRepository = $eventoRepository;
    }

    public function getAll()
    {
        return $this->eventoRepository->getAll();
    }

    public function find($id)
    {
        return $this->eventoRepository->find($id);
    }

    public function create(array $data)
    {
        return $this->eventoRepository->create($data);
    }

    public function update($id, array $data)
    {
        return $this->eventoRepository->update($id, $data);
    }

    public function delete($id)
    {
        return $this->eventoRepository->delete($id);
    }
}