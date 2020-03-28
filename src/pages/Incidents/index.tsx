import React, {useEffect, useState} from 'react';
import {Container, Total, Title, Bold, SubTitle} from './styles';
import api from '../../services/api'

import ListIncidents from '../../components/ListIncidents';
import { Incident } from '../../types/Incidents';

const Incidents = () => {
  const [incidents, setIncidents] = useState<Incident[]>([])
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadIncidents = async () => {
    if(loading) {
      return
    }

    if(total > 0 && incidents.length == total) {
      return
    } 
    
    setLoading(true);
    
    const response = await api.get('incidents', { params: { page } });
    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, [])

  return (
    <Container>
      <Total>
        {' '}
        Total de <Bold>{`${total} casos`}</Bold>
      </Total>
      <Title>Bem-Vindo!</Title>
      <SubTitle>Escolha um dos casos abaixo e salve o dia!</SubTitle>

      <ListIncidents data={incidents} load={loadIncidents} />
    </Container>
  );
};

export default Incidents;
