<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
/**
 * 回复模型
 *
 */
class Reply_model extends MY_Model
{

	function __construct()
	{
		parent::__construct();
	}

	function add($data)
	{
		return $this->db->insert('reply', $data);
	}

	function get_reply_list($tid, $page, $limit)
	{
		$this->db->select('*');
		$this->db->from('reply');
		$this->db->where('tid = '.$tid);
		$this->db->order_by('addtime', 'DESC');
		$this->db->limit($limit, $page);
		$query = $this->db->get();
		if($query->num_rows() > 0)
		{
			return $query->result_array();
		}
	}


}
