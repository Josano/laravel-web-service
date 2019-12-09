<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['name', 'description', 'image'];

    public function getResults($data, $total)
    {
        if (!isset($data['filter']) && !isset($data['name']) && !isset($data['description']))
            return $this->paginate($total);

        $this->where(function ($query) use ($data) {
            if(isset($data['filter'])){
                $filter = $data['filter'];
            }
        });    
    }
}
