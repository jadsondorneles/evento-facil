<?php

use PHPUnit\Framework\TestCase;
use App\Repositories\EventoRepository;
use Carbon\Carbon;
use Mockery as m;

class EventoRepositoryTest extends TestCase
{
    protected $eventoRepository;

    protected function setUp(): void
    {
        $this->eventoRepository = new EventoRepository();
    }

    protected function tearDown(): void
    {
        m::close();
    }

    public function testGetAll()
    {
        $eventoMock = m::mock('overload:App\Models\Evento');
        $eventoMock->shouldReceive('whereNull')->with('data_deletado')->andReturnSelf();
        $eventoMock->shouldReceive('orderBy')->with('data_inicio')->andReturnSelf();
        $eventoMock->shouldReceive('get')->andReturn(collect([]));

        $this->assertEquals(collect([]), $this->eventoRepository->getAll());
    }

    public function testFind()
    {
        $eventoMock = m::mock('overload:App\Models\Evento');
        $eventoMock->shouldReceive('where')->with('id', 1)->andReturnSelf();
        $eventoMock->shouldReceive('whereNull')->with('data_deletado')->andReturnSelf();
        $eventoMock->shouldReceive('first')->andReturn($eventoMock);

        $eventoMock->shouldReceive('makeHidden')->with('data_deletado')->andReturnSelf();
        $eventoMock->shouldReceive('toArray')->andReturn(['id' => 1, 'titulo' => 'Teste Titulo Evento']);

        $this->assertEquals(['id' => 1, 'titulo' => 'Teste Titulo Evento'], $this->eventoRepository->find(1)->toArray());
    }

    public function testCreate()
    {
        $data = [
            'titulo' => 'Teste Titulo Evento',
            'descricao' => 'Teste Descricao Evento',
            'data_inicio' => '2024-08-01 10:00:00',
            'data_termino' => '2024-08-01 12:00:00',
            'cor' => '#000000'
        ];
        $eventoMock = m::mock('overload:App\Models\Evento');
        $eventoMock->shouldReceive('create')->with($data)->andReturn($data);

        $this->assertEquals($data, $this->eventoRepository->create($data));
    }

    public function testUpdate()
    {
        $data = ['titulo' => 'Evento Teste Atualizado'];
        $evento = m::mock('overload:App\Models\Evento');
        $evento->shouldReceive('find')->with(1)->andReturnSelf();
        $evento->shouldReceive('update')->with($data)->andReturn(true);

        $this->assertEquals($evento, $this->eventoRepository->update(1, $data));
    }

    public function testDelete()
    {
        $evento = m::mock('overload:App\Models\Evento');
        $evento->data_deletado = Carbon::now('America/Sao_Paulo')->toDateTimeString();
        $evento->shouldReceive('find')->with(1)->andReturnSelf();
        $evento->shouldReceive('update')->andReturn(true);

        $this->assertEquals($evento, $this->eventoRepository->delete(1));
    }
}