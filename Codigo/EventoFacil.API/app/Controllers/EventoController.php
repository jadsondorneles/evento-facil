<?php

namespace App\Controllers;

use App\Services\EventoService;
use App\Validators\EventoValidator;

class EventoController
{
    protected $eventoService;

    public function __construct(EventoService $eventoService)
    {
        $this->eventoService = $eventoService;
    }

    public function index()
    {
        try {
            $eventos = $this->eventoService->getAll();
            return $this->jsonResponse($eventos);
        } catch (\InvalidArgumentException $e) {
            return $this->errorResponse($e, 400);
        } catch (\Exception $e) {
            return $this->errorResponse($e);
        }
    }

    public function show($id)
    {
        try {
            $evento = $this->eventoService->find($id);
            return $this->jsonResponse($evento);
        } catch (\InvalidArgumentException $e) {
            return $this->errorResponse($e, 400);
        } catch (\Exception $e) {
            return $this->errorResponse($e);
        }
    }

    public function store($data = null)
    {
        $data = $data ?: json_decode(file_get_contents('php://input'), true);
        try {
            EventoValidator::validate($data);
            $this->eventoService->create($data);
            return $this->jsonResponse(['sucesso' => true, 'mensagem' => 'Evento criado com sucesso']);
        } catch (\InvalidArgumentException $e) {
            return $this->errorResponse($e, 400);
        } catch (\Exception $e) {
            return $this->errorResponse($e);
        }
    }

    public function update($id, $data = null)
    {
        $data = $data ?: json_decode(file_get_contents('php://input'), true);
        try {
            EventoValidator::validate($data);
            $this->eventoService->update($id, $data);
            return $this->jsonResponse(['sucesso' => true, 'mensagem' => 'Evento atualizado com sucesso']);
        } catch (\InvalidArgumentException $e) {
            return $this->errorResponse($e, 400);
        } catch (\Exception $e) {
            return $this->errorResponse($e);
        }
    }

    public function delete($id)
    {
        try {
            $this->eventoService->delete($id);
            return $this->jsonResponse(['sucesso' => true, 'mensagem' => 'Evento removido com sucesso']);
        } catch (\InvalidArgumentException $e) {
            return $this->errorResponse($e, 400);
        } catch (\Exception $e) {
            return $this->errorResponse($e);
        }
    }

    protected function jsonResponse($data, $status = 200)
    {
        header('Content-Type: application/json');
        http_response_code($status);
        echo json_encode($data);
    }

    protected function errorResponse($e, $status = 500)
    {
        $response = [
            'titulo' => 'Erro na aplicação',
            'detalhe' => $e->getMessage(),
            'tipo_detalhe' => get_class($e),
            'status' => $status,
            'tipo' => 'error',
            'instancia' => $_SERVER['REQUEST_URI'],
            'codigo' => $status
        ];
        header('Content-Type: application/json');
        http_response_code($status);
        echo json_encode($response);
    }
}