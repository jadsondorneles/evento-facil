<?php

use PHPUnit\Framework\TestCase;
use App\Controllers\EventoController;
use App\Services\EventoService;

class EventoControllerTest extends TestCase
{
    protected $eventoServiceMock;
    protected $eventoController;

    protected function setUp(): void
    {
        $this->eventoServiceMock = $this->createMock(EventoService::class);
        $this->eventoController = new EventoController($this->eventoServiceMock);
    }

    public function testIndex()
    {
        $this->eventoServiceMock->method('getAll')->willReturn(collect([]));
        
        ob_start();
        $this->eventoController->index();
        $response = ob_get_clean();

        $this->assertJson($response);
        $this->assertEquals(json_encode([]), $response);
    }

    public function testShow()
    {
        $this->eventoServiceMock->method('find')->willReturn(['id' => 1, 'titulo' => 'Test Event']);
        
        ob_start();
        $this->eventoController->show(1);
        $response = ob_get_clean();

        $this->assertJson($response);
        $this->assertEquals(json_encode(['id' => 1, 'titulo' => 'Test Event']), $response);
    }

    public function testStore()
    {
        $data = [
            'titulo' => 'Test Event',
            'descricao' => 'Test Description',
            'data_inicio' => '2024-08-01 10:00:00',
            'data_termino' => '2024-08-01 12:00:00',
            'cor' => 'azul'
        ];

        $this->eventoServiceMock->expects($this->once())->method('create')->with($data);
        
        ob_start();
        $this->eventoController->store($data);
        $response = ob_get_clean();

        $this->assertJson($response);
        $this->assertStringContainsString('Evento criado com sucesso', $response);
    }

    public function testUpdate()
    {
        $data = [
            'titulo' => 'Updated Event',
            'descricao' => 'Updated Description',
            'data_inicio' => '2024-08-01 10:00:00',
            'data_termino' => '2024-08-01 12:00:00',
            'cor' => 'verde'
        ];

        $this->eventoServiceMock->expects($this->once())->method('update')->with(1, $data);
        
        ob_start();
        $this->eventoController->update(1, $data);
        $response = ob_get_clean();

        $this->assertJson($response);
        $this->assertStringContainsString('Evento atualizado com sucesso', $response);
    }

    public function testDelete()
    {
        $this->eventoServiceMock->expects($this->once())->method('delete')->with(1);
        
        ob_start();
        $this->eventoController->delete(1);
        $response = ob_get_clean();

        $this->assertJson($response);
        $this->assertStringContainsString('Evento removido com sucesso', $response);
    }
}