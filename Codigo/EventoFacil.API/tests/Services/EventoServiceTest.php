<?php

use PHPUnit\Framework\TestCase;
use App\Services\EventoService;
use App\Repositories\EventoRepository;
use Carbon\Carbon;

class EventoServiceTest extends TestCase
{
    protected $eventoRepositoryMock;
    protected $eventoService;

    protected function setUp(): void
    {
        $this->eventoRepositoryMock = $this->createMock(EventoRepository::class);
        $this->eventoService = new EventoService($this->eventoRepositoryMock);
    }

    public function testGetAll()
    {
        $expected = collect([]);
        $this->eventoRepositoryMock->method('getAll')->willReturn($expected);
        $this->assertEquals($expected, $this->eventoService->getAll());
    }

    public function testFind()
    {
        $this->eventoRepositoryMock->method('find')->willReturn(['id' => 1, 'titulo' => 'Teste Titulo Evento']);
        $this->assertEquals(['id' => 1, 'titulo' => 'Teste Titulo Evento'], $this->eventoService->find(1));
    }

    public function testCreate()
    {
        $data = [
            'titulo' => 'Teste Titulo Evento',
            'descricao' => 'Teste Descricao Evento',
            'data_inicio' => '2024-08-01 10:00:00',
            'data_termino' => '2024-08-01 12:00:00',
            'cor' => 'azul'
        ];
        $this->eventoRepositoryMock->method('create')->willReturn($data);

        $this->assertEquals($data, $this->eventoService->create($data));
    }

    public function testUpdate()
    {
        $data = [
            'titulo' => 'Evento Teste Atualizado',
            'descricao' => 'Evento Teste Descricao Atualizado',
            'data_inicio' => '2024-08-01 10:00:00',
            'data_termino' => '2024-08-01 12:00:00',
            'cor' => 'verde'
        ];
        $this->eventoRepositoryMock->method('update')->willReturn($data);

        $this->assertEquals($data, $this->eventoService->update(1, $data));
    }

    public function testDelete()
    {
        $data = ['data_deletado' => Carbon::now('America/Sao_Paulo')->toDateTimeString()];
        $this->eventoRepositoryMock->method('delete')->willReturn($data);

        $this->assertEquals($data, $this->eventoService->delete(1));
    }
}