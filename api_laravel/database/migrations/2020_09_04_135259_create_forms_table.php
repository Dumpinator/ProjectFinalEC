<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFormsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('forms', function (Blueprint $table) {
            
            $table->bigIncrements('id');
            $table->boolean('status')->default(0);
            $table->string('1', 170);
            $table->string('2', 170);
            $table->string('3', 170);
            $table->string('4', 170);
            $table->string('5', 170);
            $table->string('6', 170);
            $table->string('7', 170);
            $table->string('8', 170);
            $table->string('9', 170);
            $table->string('10', 170);
            $table->string('11', 170);
            $table->string('12', 170);
            $table->string('13', 170);
            $table->string('14', 170);
            $table->string('15', 170);
            $table->string('16', 170);
            $table->string('17', 170);
            $table->string('18', 170);
            $table->string('19', 170);
            $table->string('20', 170);
            $table->string('url', 60)->unique();
            $table->timestamps();

        });

        Schema::table('forms', function (Blueprint $table) {
            $table->bigInteger('user_id')->unsigned()->index();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('forms');
    }
}
